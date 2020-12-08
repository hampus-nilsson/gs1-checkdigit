# GS1 Javascript check digit algorithm
This Javascript function is used to generate check digits. The last digit of some barcodes is a computer check digit which makes sure the barcode is correctly composed. Unfortunately Javascript does not play nicely with long Integers. This **algorithm expects a String as input and does not handle Integers as input**.

## Supported types (gs1):
SSCC, GTIN-8, GTIN-12, GTIN-13, GTIN-14, GSIN

## Calculate a check digit manually
![](https://raw.githubusercontent.com/artlinedev/gs1-checkdigit/main/manual.png "Calculate a check digit manually")
Read more about manually calculating a check digit [here.](https://www.gs1.org/services/how-calculate-check-digit-manually)
