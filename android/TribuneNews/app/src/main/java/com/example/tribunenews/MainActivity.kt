package com.example.tribunenews

import android.annotation.SuppressLint
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.RecyclerView
import com.google.android.gms.ads.AdRequest
import com.google.android.gms.ads.LoadAdError
import com.google.android.gms.ads.MobileAds
import com.google.android.gms.ads.interstitial.InterstitialAd
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class MainActivity : AppCompatActivity() {
    lateinit var adapter: NewsAdapter
    private lateinit var newsList: RecyclerView
    private val articles = mutableListOf<Article>()
    var pageNum = 1
    var totalResult = -1

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        loadAds()
        // Binding data to RecyclerView
        newsList = findViewById(R.id.newsList)
        adapter = NewsAdapter(this, articles)
        newsList.adapter = adapter
        newsList.layoutManager = StackLayoutManager(
            horizontalLayout = false
        )
        getNews()
    }

    override fun onRestart() {
        super.onRestart()
        loadAds()
    }

    private fun getNews() {
        val news = NewsService.newsInstance.getHeadlines("in", pageNum)

        news.enqueue(object : Callback<News> {
            @SuppressLint("NotifyDataSetChanged")
            override fun onResponse(call: Call<News>, response: Response<News>) {
                val newsResponse = response.body()
                if (newsResponse != null) {
                    totalResult = newsResponse.totalResults
                    articles.addAll(newsResponse.articles)
                    adapter.notifyDataSetChanged() // Reflect changes when received data
                }
            }

            override fun onFailure(call: Call<News>, t: Throwable) {
                Log.d("NETWORK_CALL", "onResponse: ${t.stackTrace}")
            }
        })
    }

    private fun loadAds() {
        // Admob Setup
        MobileAds.initialize(this@MainActivity) {}
        val adRequest = AdRequest.Builder().build()
        InterstitialAd.load(
            this,
            BuildConfig.API_KEY,
            adRequest,
            object : InterstitialAdLoadCallback() {
                override fun onAdFailedToLoad(adError: LoadAdError) {
                    Log.d("AdIntegration", "AdMobError: $adError")
                }

                override fun onAdLoaded(interstitialAd: InterstitialAd) {
                    Log.d("AdIntegration", "Ad was loaded.")
                    interstitialAd.show(this@MainActivity)
                }
            }
        )
    }
}