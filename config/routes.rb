Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "site#index"
  # Api for reactjs
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :items
    end
  end
end
