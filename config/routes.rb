SavedPages::Application.routes.draw do
  # resources :user
  get 'u', to: 'users#show'
  resources :users, :only => [:new, :create]
  resource :session, :only => [:new, :create]
  resources :archive, :only => [:index]
  
  get 'liked', to: 'favorites#index'
  
  root :to => "root#root"
end
