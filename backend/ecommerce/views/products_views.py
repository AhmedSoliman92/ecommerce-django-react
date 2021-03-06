
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ecommerce.models import Product
from ecommerce.serializers import ProductSerializer
from rest_framework import status


@api_view()
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many = True)
    return Response(serializer.data)

@api_view()
def getProduct(request,pk):
    product = Product.objects.get(_id = pk)
    serializer = ProductSerializer(product, many = False)
    return Response(serializer.data)

