# #1) შექმენი Ipone კლასი გაუწერე brend, name,  year, price  და გამოიტანე 2 მაგალითი მისი

# class Iphone:
#     def __init__ (self, brend, name, year, price):
#         self.brend = brend
#         self.name = name
#         self.year = year
#         self.price = price

# iphone1 = Iphone("apple", "iphone 14", 2024, 1300)

# print(iphone1.brend)
# print(iphone1.name)
# print(iphone1.year)
# print(iphone1.price)

# 2) დაწერე Dog class-ის რომელსაც გაუწერ name, age,  brend და შექმენი 2 ობიექტი  დაამატე ფუნქცია make_sound()

# class Dog:
#     def __init__ (self, name, age, brend):
#         self.name = name
#         self.age = age
#         self.brend = brend

#     def make_sound(self):
#         print("woaf")

# dog1 = Dog("bubu", "6", "labradori")
# dog1.make_sound()


# 3) შექმენი user ცლასი და შეიტანე name, number,  email  დაფარე ლეველ 1 deta hiding-ით  ხოლო email   level 2ით და 2ივე ხერხით გამოიტანეტერმინალში 
# class User:
#     def __init__ (self, name, number, email):

#         self.name = name
#         self._number = number
#         self.__email = email

#     def display(self):
#         print(self.name)
#         print(self._number)
#         print(self.__email)

# adamiani = User("Gio", 67111251, "Gio@gmail.com")
# adamiani.display()


# 4) შექმენი მამის კლასი რომელსაც მეთოდი ექნება drive დედის კლასი რომელსაც მეთოდი ექნება cook ბავშვი უნდა მიიღოს ორივე

class Father:
    def __init__ (self, drive):
        self.drive = drive

class Mother:
    def __init__ (self, cook):
        self.cook = cook

class Child(Father, Mother):
    def __init__(self, drive):
        super().__init__(drive)
        
print(Father)
print(Mother)






# Multiple Inheritance — როდესაც ერთ შვილ კლასს ერთზე მეტი მშობელი კლასი ჰყავს.
# Multilevel Inheritance — როდესაც მემკვიდრეობა რამდენიმე დონეზე გადადის