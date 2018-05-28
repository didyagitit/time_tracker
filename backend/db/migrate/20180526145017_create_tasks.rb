class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :time
      t.string :finished_at
      t.string :time_description
      t.timestamps
    end
  end
end
