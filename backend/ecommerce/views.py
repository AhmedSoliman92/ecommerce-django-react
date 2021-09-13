from django.http import response
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .product import products

@api_view()
def getProducts(request):
    return Response(products)


@api_view()
def getProduct(request,pk):
    product = None
    for item in products:
        if item['_id']==pk:
            product=item
            return Response(product)
