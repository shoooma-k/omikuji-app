Rails.application.routes.draw do
  get "/" => "home#top"
  get "about" => "home#about"
  
  get "pull/new"
  get "users/new" => "users#new"

  get "omikuji/pull" => "omikuji#pull"

  
  

end
