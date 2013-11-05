SavedPages::Application.routes.draw do
  get 'u', to: 'users#show'
  resources :users, :only => [:new, :create]
  
  resource :session, :only => [:new, :create]
  
  resources :bookmarks, :only => [:new, :create]
  
  get 'archive', to: 'archives#index'
  
  get 'liked', to: 'favorites#index'
  
  root :to => "root#root"
end
