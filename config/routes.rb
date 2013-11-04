BriskPaper::Application.routes.draw do
  # resources :user
  get 'u', to: 'users#show'
  resources :users, :only => [:new, :create]
  
  root :to => "root#root"
end
