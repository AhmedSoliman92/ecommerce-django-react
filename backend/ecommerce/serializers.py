from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Order, OrderItem, Product, ShippingAddress
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializer(serializers.ModelSerializer):

    fullName = serializers.SerializerMethodField(read_only = True)
    _id = serializers.SerializerMethodField(read_only = True)
    isAdmin = serializers.SerializerMethodField(read_only = True)

    class Meta:
        model = User
        fields = ['id','_id', 'username', 'fullName', 'email', 'isAdmin']
    
    def get_fullName(self, obj):
        fullName = obj.first_name + ' ' + obj.last_name
        if fullName == '':
            return obj.email
        return fullName

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

class UserSerializerWithToken(UserSerializer):

    token = serializers.SerializerMethodField(read_only = True)

    class Meta:
        model = User
        fields = ['id','_id', 'username', 'fullName', 'email', 'isAdmin', 'token']
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'

class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):

    orders = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = Order
        fields = '__all__'

    def get_orders(self, order):
        items = order.orderitem_set.all()
        serializer = OrderItemsSerializer(items, many = True)
        return serializer.data
    
    def get_shippingAdress(self, obj):
        try:
            address = ShippingAddressSerializer(obj.shippingAddress, namy = False)
        except:
            address = False
        return address
    
    def get_users(self, obj):
        user = obj.user
        serializer = UserSerializer(user , many = False)
        return serializer.data