Rails.application.routes.draw do
  resources :battles
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'login', to: 'users#login'
  # resources :pokemons

  # resources :locations

  resources :pokemons do
    resources :locations
  end
end
