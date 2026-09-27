import random
from django.db import models

def generate_trade_id():
    return random.randint(10000, 99999)

class Trade(models.Model):
    id = models.IntegerField(primary_key=True, default=generate_trade_id, editable=False)
    PRODUCT_CHOICES = [
        ('OIL', 'Crude Oil'),
        ('GAS', 'Natural Gas'),
        ('POWER', 'Electricity'),
    ]
    
    UNIT_CHOICES = [
        ('BBL', 'Barrels'),
        ('MMBTU', 'Million British Thermal Units'),
        ('MWH', 'Megawatt Hours'),
    ]
    
    STATUS_CHOICES = [
        ('CAPTURED', 'Captured'),
        ('APPROVED', 'Approved'),
        ('SCHEDULED', 'Scheduled'),
        ('ACTUALIZED', 'Actualized'),
        ('INVOICED', 'Invoiced'),
    ]

    TRANSPORT_CHOICES = [
        ('VESSEL', 'Vessel'),
        ('TRAIN', 'Train'),
        ('TRUCK', 'Truck'),
    ]

    INVOICE_TYPE_CHOICES = [
        ('AP', 'Accounts Payable'),
        ('AR', 'Accounts Receivable'),
    ]

    company = models.CharField(max_length=255)
    counterparty = models.CharField(max_length=255)
    product = models.CharField(max_length=20, choices=PRODUCT_CHOICES)
    start_date = models.DateField()
    end_date = models.DateField()
    price = models.DecimalField(max_digits=15, decimal_places=4)
    quantity = models.DecimalField(max_digits=15, decimal_places=4)
    unit = models.CharField(max_length=20, choices=UNIT_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='CAPTURED')
    
    # Scheduling & Logistics
    transport_mode = models.CharField(max_length=20, choices=TRANSPORT_CHOICES, null=True, blank=True)
    vessel_name = models.CharField(max_length=255, null=True, blank=True)
    
    # Actuals & Accruals
    actual_quantity = models.DecimalField(max_digits=15, decimal_places=4, null=True, blank=True)
    accrual_amount = models.DecimalField(max_digits=15, decimal_places=4, null=True, blank=True)
    
    # Invoicing
    invoice_type = models.CharField(max_length=2, choices=INVOICE_TYPE_CHOICES, null=True, blank=True)
    invoice_number = models.CharField(max_length=50, null=True, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.product} Trade: {self.company} vs {self.counterparty}"
