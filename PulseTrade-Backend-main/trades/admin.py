from django.contrib import admin
from .models import Trade, AppUser, CommunityConcept, VideoTutorial

@admin.register(VideoTutorial)
class VideoTutorialAdmin(admin.ModelAdmin):
    list_display = ('title', 'content_type', 'category', 'channel_name', 'is_featured_home', 'order', 'created_at')
    list_filter = ('content_type', 'category', 'is_featured_home', 'channel_name')
    search_fields = ('title', 'summary', 'url', 'channel_name')
    list_editable = ('order', 'is_featured_home')

@admin.register(CommunityConcept)
class CommunityConceptAdmin(admin.ModelAdmin):
    list_display = ('title', 'author_name', 'category', 'is_approved', 'created_at')
    list_filter = ('category', 'is_approved', 'created_at')
    search_fields = ('title', 'author_name', 'answer', 'key_takeaways')
    actions = ['approve_concepts', 'unapprove_concepts']

    @admin.action(description='Approve selected concepts')
    def approve_concepts(self, request, queryset):
        queryset.update(is_approved=True)

    @admin.action(description='Unapprove (hide) selected concepts')
    def unapprove_concepts(self, request, queryset):
        queryset.update(is_approved=False)

@admin.register(AppUser)
class AppUserAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'device_id', 'created_at', 'last_active')
    search_fields = ('name', 'role', 'device_id')
    list_filter = ('role', 'created_at')

@admin.register(Trade)
class TradeAdmin(admin.ModelAdmin):
    list_display = ('id', 'company', 'counterparty', 'product', 'price', 'quantity', 'status', 'created_at')
    list_filter = ('product', 'status', 'transport_mode')
    search_fields = ('company', 'counterparty', 'invoice_number')
