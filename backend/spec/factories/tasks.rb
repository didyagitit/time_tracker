FactoryBot.define do
  factory :task do
    time "00:00:00"
    finished_at Time.now.strftime("%d/%m/%Y")
    time_description 'Go outside'
  end
end
