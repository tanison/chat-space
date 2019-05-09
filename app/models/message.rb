class Message < ApplicationRecord
  berongs_to :group
  berongs_to :user

  validates :content, presence: true, unless: :image?

  mount_uploader :image, ImagesUploader
end
