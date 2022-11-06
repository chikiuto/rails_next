Rails.application.routes.draw do
  resources :posts
  # get 'posts'     => 'posts#index'
  # get 'posts/:id' => 'posts#show'
  # get 'posts/new' => 'posts#new'
  # post 'posts' => 'posts#create'
  # get 'posts/:id/edit' => 'posts#edit'
  # patch 'posts/:id'  => 'posts#update'
  # delete 'posts/:id' => 'posts#destroy'
  
  get 'recipes' => 'recipes#index'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
