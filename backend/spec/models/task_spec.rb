require 'rails_helper'

RSpec.describe Task, type: :model do
  it { should validate_presence_of(:time) }
  it { should validate_presence_of(:time_description) }

  context 'when time field is filled with wrong format' do
    it 'fails validation' do
      task = FactoryBot.build(:task, time: '00:00:001')

      expect(task).not_to be_valid
    end
  end

  context 'when time field is filled with correct format' do
    it 'passes validation' do
      task = FactoryBot.build(:task, time: '00:00:00')

      expect(task).to be_valid
    end
  end
end
