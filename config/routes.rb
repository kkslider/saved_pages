BriskPaper::Application.routes.draw do
  # resources :user
  get 'u', to: 'users#show'
  
  root :to => "root#root"
end
