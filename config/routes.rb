SavedPages::Application.routes.draw do
  get 'u', to: 'users#show'
  resources :users, :only => [:new, :create]
  
  resource :session, :only => [:new, :create]
  
  resources :bookmarks, :only => [:new, :create, :edit, :update, :destroy, :show]
  get 'archive', to: 'bookmarks#archive'
  get 'liked', to: 'bookmarks#like'
  
  resources :favorites, :only => [:create]
  
  root :to => "root#root"
end
