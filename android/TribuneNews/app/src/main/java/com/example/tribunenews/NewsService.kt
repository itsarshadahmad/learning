package com.example.tribunenews

import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET
import retrofit2.http.Query

const val BASE_URL = "https://newsapi.org/v2/"
const val API_KEY = BuildConfig.NEWS_API_KEY

interface NewsInterface {
    @GET("top-headlines?apikey=$API_KEY")
    fun getHeadlines(
        @Query("country") country: String, @Query("page") page: Int
    ): Call<News>
}

object NewsService {
    val newsInstance: NewsInterface by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(NewsInterface::class.java)
    }
}