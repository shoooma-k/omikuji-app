Rails.application.routes.draw do
  resources :omikujis, only: [:index]

  get "omikujis/index" => "omikujis#index"
  get "omikujis/show" => "omikujis#show"

  get "/" => "home#top"
  get "about" => "home#about"
end
