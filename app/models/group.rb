class Group < ApplicationRecord
  has_many :group_users
  has_many :users, through: :group_users
  # validdates :name, presence: true
end
