require 'rails_helper'

RSpec.describe 'Tasks API', type: :request do
  describe 'GET /tasks' do
    it 'returns tasks' do
      task1 = FactoryBot.create(:task, time: '10:00:00')
      task2 = FactoryBot.create(:task, time: '11:00:00')
      task3 = FactoryBot.create(:task, time: '12:00:00')

      get '/api/v1/tasks'
      result = JSON.parse(response.body)

      expect(result['tasks'].length).to eq(3)
    end

    it 'responds with status code 200' do
      task = FactoryBot.create(:task, time: '12:00:00')

      get '/api/v1/tasks'

      expect(response).to have_http_status(200)
    end
  end

  describe 'POST /tasks' do
    context 'when task parameters are valid' do
      it 'creates a new task' do
        task_params = {
          task: {
            time: '10:00:01',
            time_description: 'New Task',
            finished_at: '27/10/2100'
          }
        }

        post '/api/v1/tasks', params: task_params
        result = JSON.parse(response.body)

        expect(result['task']['finished_at']).to eq(task_params[:task][:finished_at])
        expect(result['task']['time']).to eq(task_params[:task][:time])
        expect(result['task']['time_description']).to eq(task_params[:task][:time_description])
      end

      it 'responds with status code 201' do
        task_params = {
          task: {
            time: '10:00:01',
            time_description: 'New Task',
            finished_at: '27/10/2100'
          }
        }

        post '/api/v1/tasks', params: task_params
        result = JSON.parse(response.body)

        expect(response).to have_http_status(201)
      end
    end

    context 'when task parameters are invalid' do
      it 'responds with status code 422' do
        task_params = {
          task: {
            time: '10:00:011',
            time_description: 'New Task',
            finished_at: '27/10/2100'
          }
        }

        post '/api/v1/tasks', params: task_params

        expect(response).to have_http_status(422)
      end
    end
  end
end
