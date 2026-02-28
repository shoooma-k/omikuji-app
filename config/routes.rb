Rails.application.routes.draw do
  get "omikujis/select" => "omikujis#select"
  get "omikujis/result" => "omikujis#result"
  get "omikujis/index" => "omikujis#index"
  get "omikujis/:id" => "omikujis#show"
  post "omikujis/:id/destroy" => "omikujis#destroy"

  
  get "/" => "home#top"
  get "about" => "home#about"
end
