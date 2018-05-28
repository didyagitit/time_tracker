# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
(20.times).each do |index|
  finished = Time.now.strftime("%d/%m/%Y %H:%M")
  Task.create(time: "00:00:01", time_description: "Task #{index}", finished_at: finished)
end
