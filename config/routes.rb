SavedPages::Application.routes.draw do
  # resources :user
  get 'u', to: 'users#show'
  resources :users, :only => [:new, :create]
  resource :session, :only => [:new, :create]
  root :to => "root#root"
end
