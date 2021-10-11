
from django.core.checks import messages
from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from ecommerce.models import Order, OrderItem, Product, ShippingAddress
from django.contrib.auth.models import User
from ecommerce.serializers import ProductSerializer,OrderSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.contrib.auth.hashers import make_password
from rest_framework import status

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):

    user = request.user
    data = request.data

    orderItems = data['orderItems']

    if orderItems and len(orderItems) ==0:
        return Response({'details: ': 'No Order Items'}, status=status.HTTP_400_BAD_REQUEST)
    
    order = Order.objects.create(
        user = user,
        paymentMethod = data['paymentMethod'],
        taxPrice =data['taxPrice'],
        shippingPrice = data['shippingPrice'],
        totalPrice = data['totalPrice']
    )

    shipping = ShippingAddress.objects.create(
        order = order,
        address = data['shippingAddress']['address'],
        city = data['shippingAddress']['city'],
        postalCode = data['shippingAddress']['postalCode'],
        country = data['shippingAddress']['country'],

    )
    
    for itm in orderItems:
        product = Product.objects.get(_id = itm['product'])

        item = OrderItem.objects.create(
            product = product,
            order = order,
            name = product.name,
            qty = itm['qty'],
            price = itm['price'],
            image = product.image.url
        )

        product.countInStock -= item.qty
        product.save()
        
    serializer = OrderSerializer(order, many = True)
    return Response(serializer.data)

