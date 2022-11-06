class RecipesController < ApplicationController
	def index
		def index
			@recipes = Recipe.all
			render json: @recipes
		end
	end
end
