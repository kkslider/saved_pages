BriskPaper::Application.routes.draw do
  # resources :user
  get 'u', to: 'users#show'
end
