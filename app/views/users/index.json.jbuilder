json.array! @users do |user|
  json.id user.id
  json.name user.name
end
# json.array! @products do |product|
#   json.id product.id
#   json.title product.title
#   json.image product.image_url
#   json.detail product.detail
# end
