SavedPages::Application.routes.draw do
  resources :users, :only => [:new, :create, :show]
  
  resource :session, :only => [:new, :create, :destroy]
  
  resources :bookmarks, :only => [:new, :create, :edit, :update, :destroy, :show]
  get 'u', to: 'bookmarks#unread'
  get 'archive', to: 'bookmarks#archive'
  get 'liked', to: 'bookmarks#like'
  
  resources :favorites, :only => [:create]
  
  root :to => "root#root"
end
