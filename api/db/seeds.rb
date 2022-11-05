# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Recipe.create!(
	[
		{
			title: "デパ地下風かぼちゃサラダ",
			url: "https://recipe.rakuten.co.jp/recipe/1750074197/",
			food_image_url: "https://image.space.rakuten.co.jp/d/strg/ctrl/3/84ee56cf01c8c1a6196dcf3ee2ca62da3d5d0fd3.10.2.3.2.jpg",
			material: "[\"かぼちゃ\", \"玉ねぎ\", \"ベーコン\", \"●マヨネーズ\", \"●粒マスタード\", \"●砂糖\", \"●塩\", \"●粗挽きこしょう\"]",
			cost: "300円前後",
			indication: "約15分"
		},
		{
			title: "超→簡単❤キャベツのツナサラダ～",
			url: "https://recipe.rakuten.co.jp/recipe/1540000496/",
			food_image_url: "https://image.space.rakuten.co.jp/d/strg/ctrl/3/95e9d9a657bd6807f218da47601c62c8e8f55d1f.14.1.3.2.jpg",
			material: "[\"キャベツ\", \"きゅうり\", \"ツナ缶（今回はツナコーン缶）\", \"塩・コショウ\", \"マヨネーズ\", \"酢\"]",
			cost: "300円前後",
			indication: "約15分"
		}
	]
)

Post.create!(
  [
    {
      title: 'Next.js + Ruby on Rails + Docker の環境構築'
    },
    {
      title: 'React Hooks でカスタムフックを作る'
    },
    {
      title: 'GraphQL と Apollo Client 入門'
    },
    {
      title: '【TypeScript4.3】Template Literal Types'
    },
    {
      title: 'Tailwind CSS でダークモード実装'
    },
  ]
)