Rails.application.routes.draw do
  get "signup" => "users#new"
  get "users/index" => "users#index"
  post "users/:id/update" => "users#update"
  get "users/:id/edit" => "users#edit"
  get "users/:id" => "users#show"
  post "users/create" => "users#create"
  post "login" => "users#login"
  post "logout" => "users#logout"
  get "login" => "users#login_form"

  get "omikujis/select" => "omikujis#select"
  get "omikujis/result" => "omikujis#result"
  get "omikujis/index" => "omikujis#index"
  get "omikujis/:id" => "omikujis#show"
  post "omikujis/create" => "omikujis#create"
  post "omikujis/:id/destroy" => "omikujis#destroy"

  
  get "/" => "home#top"
  get "about" => "home#about"
end
