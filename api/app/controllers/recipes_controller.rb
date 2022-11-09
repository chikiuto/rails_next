class RecipesController < ApplicationController
	def index
		@recipes = Recipe.all
		render json: @recipes
	end

	def create
		@recipe = Recipe.create(title: params["title"]
      # title: "aewfiuh",
			# url: "tetaew"
			# food_image_url: "aeiuwfh"
			# material: "epiuawrth"
			# cost: "bvyhrap"
			# indication: "h@alkewafm"
    )

		render json: @recipe
	end
end
