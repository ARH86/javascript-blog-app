class Api::BlogsController < ApplicationController

  def index
    @blog = Blog.all
    render 'index.json.jbuilder'
  end 
end
