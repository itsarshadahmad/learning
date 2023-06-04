package com.example.tribunenews

import android.content.Context
import android.content.Intent
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.google.android.gms.ads.interstitial.InterstitialAd

class NewsAdapter(
    private val context: Context,
    private val articles: List<Article>
) :
    RecyclerView.Adapter<NewsAdapter.ArticleViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ArticleViewHolder {
        val layout = LayoutInflater.from(context)
            .inflate(R.layout.item_layout, parent, false)
        return ArticleViewHolder(layout)
    }

    override fun onBindViewHolder(holder: ArticleViewHolder, position: Int) {
        val article = articles[position]
        holder.newsTitle.text = article.title
        holder.newsDescription.text = article.description
        Glide.with(context).load(article.urlToImage).into(holder.newsImage)

        Log.d("Adapter", "onBindViewHolder: $position")

        holder.itemView.setOnClickListener {
            val intent = Intent(context, DetailActivity::class.java)
            intent.putExtra("URL", article.url)
            context.startActivity(intent)
        }
    }

    override fun getItemCount(): Int {
        return articles.size
    }

    inner class ArticleViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        var newsImage: ImageView
        var newsDescription: TextView
        var newsTitle: TextView

        init {
            newsImage = itemView.findViewById(R.id.newsImage)
            newsDescription = itemView.findViewById(R.id.newsDescription)
            newsTitle = itemView.findViewById(R.id.newsTitle)
        }
    }
}