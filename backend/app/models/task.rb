class Task < ApplicationRecord
  validates :time, presence: true, format: { with: /\A[0-9]{2}:[0-9]{2}:[0-9]{2}\z/ }
  validates :time_description, presence: true

  def self.search(search)
    where("time_description LIKE ?", "%#{search}%")
  end
end
