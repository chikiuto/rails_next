class RecipesController < ApplicationController
	def index
		@recipes = Recipe.all
		render json: @recipes
	end

	def create
    json_request = JSON.parse(request.body.read)

		@recipe = Recipe.create(
          title: params["title"],
          url: params["url"],
          food_image_url: params["food_image_url"],
          material: params["material"],
      	  cost: params["cost"],
          indication: params["indication"]
      )

		render json: json_request
		# render json: @recipe
	end
end
