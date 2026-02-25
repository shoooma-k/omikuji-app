Rails.application.routes.draw do
  get "omikujis/index" => "omikujis#index"
  get "omikujis/show" => "omikujis#show"

  get "/" => "home#top"
  get "about" => "home#about"
end
