def bandname_generator(petname , cityname):
    return petname + " " + cityname


petName = input("Enter the petname")
cityName= input("Enter the cityname")
bandName = bandname_generator( petName , cityName)
print(bandName)
