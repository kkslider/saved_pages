SavedPages::Application.routes.draw do
  get 'u', to: 'users#show'
  resources :users, :only => [:new, :create]
  
  resource :session, :only => [:new, :create]
  
  resources :bookmarks, :only => [:new, :create, :edit, :update, :destroy]
  
  get 'archive', to: 'archives#index'
  
  get 'liked', to: 'favorites#index'
  resources :favorites, :only => [:create]
  
  root :to => "root#root"
end
