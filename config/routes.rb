Rails.application.routes.draw do
  namespace :api do

    get '/blogs' => 'blogs#index'

  end
end
