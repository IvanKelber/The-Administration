Rails.application.routes.draw do




  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'skeleton#home'

  get '/media', to: 'skeleton#media'

  get '/rules', to: 'skeleton#rules'

  get '/about', to: 'skeleton#about'

  get '/contact', to: 'skeleton#contact'

  get '/signup', to: 'users#new'

  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  resources :users
  resources :account_activations, only: [:edit]



end
