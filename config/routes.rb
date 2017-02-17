Rails.application.routes.draw do
  get 'users/new'

  get 'users/edit'

  get 'users/create'

  get 'users/destroy'

  get 'users/update'

  get 'users/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'skeleton#home'

  get '/media', to: 'skeleton#media'

  get '/rules', to: 'skeleton#rules'

  get '/about', to: 'skeleton#about'

  get '/contact', to: 'skeleton#contact'



end
