<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Scripts clients - Examen JS 2019</title>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
        <link href="css/bootstrap-theme.css" rel="stylesheet" type="text/css"/>
        <link href="css/main.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <h1>Articles</h1>
        <table id="articles" class="table table-striped">            
        </table>
        <h1>Commande</h1>
        <table id="commande" class="table table-striped">  
            <thead> 
                <tr>
                    <th>Marque</th>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th class="quantite" colspan="3">Quantité</th>
                    <th>Sous-total</th>
                </tr>
            </thead>
            <tfoot>
                <tr>                    
                    <td class="text-uppercase text-right" colspan="6">Total</td>
                    <td class="total">0</td>
                </tr>
            </tfoot>
        </table>
        <script src="js/libs/jquery-3.3.1.js" type="text/javascript"></script>
        <script src="js/main.js" type="text/javascript"></script>
    </body>
</html>
