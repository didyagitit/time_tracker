module Api::V1
  class TasksController < ApplicationController
    has_scope :search

    def index
      tasks = tasks_query
      count = tasks_query.count

      render json: { tasks: tasks, count: count}
    end

    def create
      task = Task.new(tasks_params)

      if task.save
        render json: { task: task }, status: :created
      else
        head :unprocessable_entity
      end
    end

    private

    def tasks_params
      params.require(:task).permit(:time_description, :finished_at, :time)
    end

    def tasks_query
      apply_scopes(Task)
        .paginate(page: params[:page], per_page: params[:per_page])
        .order(id: :desc)
        .all
    end
  end
end
