class RecipesController < ApplicationController
	# skip_before_filter :verify_authenticity_token

	def index
		@recipes = Recipe.all
		render json: @recipes
	end
	
	def create
		@recipe = Recipe.create(
      title: "aewfiuh",
			url: "tetaew"
			food_image_url: "aeiuwfh"
			material: "epiuawrth"
			cost: "bvyhrap"
			indication: "h@alkewafm")

		render json: @recipe
	end
end
