from django.db import migrations

def create_initial_videos(apps, schema_editor):
    VideoTutorial = apps.get_model('trades', 'VideoTutorial')
    
    videos = [
        {
            "title": "The Energy Trade Lifecycle: From Deal Capture to Settlement",
            "content_type": "VIDEO",
            "category": "Trade Lifecycle",
            "url": "https://www.youtube.com/watch?v=KGHCXkJW8dU&list=PLURBCN1X3PXo&index=11",
            "video_id": "KGHCXkJW8dU",
            "thumbnail_url": "https://img.youtube.com/vi/KGHCXkJW8dU/hqdefault.jpg",
            "channel_name": "The ETRM Insider",
            "channel_url": "https://www.youtube.com/@TheETRMInsider",
            "summary": "Step-by-step walkthrough of how a trade moves from deal capture and risk valuation to scheduling, actualization, and settlement.",
            "duration": "Masterclass",
            "is_featured_home": True,
            "order": 1,
        },
        {
            "title": "Endur vs RightAngle vs Allegro: What’s the Difference?",
            "content_type": "VIDEO",
            "category": "Systems",
            "url": "https://www.youtube.com/watch?v=4tYKccmnpXg&list=PLURBCN1X3PXo&index=2",
            "video_id": "4tYKccmnpXg",
            "thumbnail_url": "https://img.youtube.com/vi/4tYKccmnpXg/hqdefault.jpg",
            "channel_name": "The ETRM Insider",
            "channel_url": "https://www.youtube.com/@TheETRMInsider",
            "summary": "Deep-dive comparison of Openlink Endur, ION RightAngle, and Allegro—their architectural strengths, market positioning, and commodities.",
            "duration": "Masterclass",
            "is_featured_home": True,
            "order": 2,
        },
        {
            "title": "Start Here: ETRM for Beginners",
            "content_type": "PLAYLIST",
            "category": "Foundations",
            "url": "https://www.youtube.com/playlist?list=PLHYcwi8PGzec",
            "video_id": "",
            "thumbnail_url": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop",
            "channel_name": "The ETRM Insider",
            "channel_url": "https://www.youtube.com/@TheETRMInsider",
            "summary": "Complete beginner course playlist on Energy Trading & Risk Management fundamentals, commodity markets, and key industry roles.",
            "duration": "Full Course Playlist",
            "is_featured_home": False,
            "order": 3,
        },
        {
            "title": "Endur for IT Beginners",
            "content_type": "PLAYLIST",
            "category": "Endur Architecture",
            "url": "https://www.youtube.com/playlist?list=PLPdQU_9BRVEE",
            "video_id": "",
            "thumbnail_url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
            "channel_name": "The ETRM Insider",
            "channel_url": "https://www.youtube.com/@TheETRMInsider",
            "summary": "Comprehensive IT practitioner series on Openlink Endur system architecture, deal modeling, configuration, and data workflows.",
            "duration": "Full Course Playlist",
            "is_featured_home": False,
            "order": 4,
        },
        {
            "title": "RightAngle for IT Beginners",
            "content_type": "PLAYLIST",
            "category": "RightAngle Architecture",
            "url": "https://www.youtube.com/playlist?list=PLbSUhbsaygJU",
            "video_id": "",
            "thumbnail_url": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
            "channel_name": "The ETRM Insider",
            "channel_url": "https://www.youtube.com/@TheETRMInsider",
            "summary": "Master ION RightAngle architecture, inventory accounting, vessel/pipeline movements, and physical crude/product operations.",
            "duration": "Full Course Playlist",
            "is_featured_home": False,
            "order": 5,
        },
    ]

    for item in videos:
        VideoTutorial.objects.get_or_create(url=item["url"], defaults=item)

def remove_initial_videos(apps, schema_editor):
    VideoTutorial = apps.get_model('trades', 'VideoTutorial')
    urls = [
        "https://www.youtube.com/watch?v=KGHCXkJW8dU&list=PLURBCN1X3PXo&index=11",
        "https://www.youtube.com/watch?v=4tYKccmnpXg&list=PLURBCN1X3PXo&index=2",
        "https://www.youtube.com/playlist?list=PLHYcwi8PGzec",
        "https://www.youtube.com/playlist?list=PLPdQU_9BRVEE",
        "https://www.youtube.com/playlist?list=PLbSUhbsaygJU",
    ]
    VideoTutorial.objects.filter(url__in=urls).delete()

class Migration(migrations.Migration):

    dependencies = [
        ('trades', '0007_videotutorial'),
    ]

    operations = [
        migrations.RunPython(create_initial_videos, remove_initial_videos),
    ]
