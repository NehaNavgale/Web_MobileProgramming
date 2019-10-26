package com.example.pizzaOrder;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    int quantity;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_main );
    }
    public void decrement(View view) {
        quantity=quantity-1;
        displayquantity(quantity);

    }

    private void displayquantity(int quantity) {
        EditText quantity1 = (EditText) findViewById(R.id.quantityTxt);
        quantity1.setText(""+quantity);


    }

    public void increment(View view) {
        quantity = quantity + 1;
        displayquantity(quantity);
    }


    public void displayMessage(String finalMessage) {
        //TextView Message = (TextView) findViewById(R.id.resultTxt);
        //Message.setText(""+finalMessage);
        Intent intent = new Intent(this, SummaryActivity.class);
        intent.putExtra("mes", finalMessage);
        startActivity(intent);

    }

    public String createFinalMessage(String names,Boolean Reg, Boolean large, Boolean cheese, Boolean olives,int price) {
        String Message = "\n Dear "+names+"\n"+"Please check your order before proceeding \nPizza Size : \n"+"Selected Large : "+large+
                "\n"+"Selected Regular : "+Reg+"\n"+"Toppings \n"+"Cheese :"+cheese+"\nOlives :"+olives+"\nQuantity :"+ quantity +"\n Total Price $: "+price;
        return  Message;


    }

    public int calculatePrice(Boolean cheese, Boolean olives, boolean Reg,boolean large) {
        int price =10;
        if (cheese)
        {
            price =price+2;
        }
        if (olives)
        {
            price=price+3;
        }
        if (Reg)
        {
            price=price+5;
        }
        if (large)
        {
            price=price+9;
        }

        return price*quantity;
    }

    //write navigation to summary and in summary write this code to display
    public void orderButton(View view) {
        EditText name = (EditText) findViewById(R.id.nameTxt);

        String names = name.getText().toString();
        CheckBox cheese = (CheckBox) findViewById(R.id.cheese_checkbox);
        Boolean chee = cheese.isChecked();
        CheckBox olive = (CheckBox) findViewById(R.id.olives_checkbox);
        Boolean olives = olive.isChecked();
        CheckBox large = (CheckBox) findViewById(R.id.pizza1);
        Boolean largePizza = large.isChecked();
        CheckBox Regular = (CheckBox) findViewById(R.id.olives_checkbox);
        Boolean regPizza = olive.isChecked();
        int price = calculatePrice(chee,olives,regPizza,largePizza);
        String finalMessage =createFinalMessage (names,regPizza,largePizza,chee,olives,price);
        displayMessage(finalMessage);
    }

    public void sendEmail(String output) {
        // Write the relevant code for triggering email

        // Hint to accomplish the task

        /*Intent intent = new Intent(Intent.ACTION_VIEW);
        if (intent.resolveActivity(getPackageManager()) !=null){
            startActivity(intent);
        }*/


    }
    public void onlyOrder(View view)
    {
        EditText name = (EditText) findViewById(R.id.nameTxt);
        String names = name.getText().toString();
        CheckBox cheese = (CheckBox) findViewById(R.id.cheese_checkbox);
        Boolean che = cheese.isChecked();
        CheckBox olive = (CheckBox) findViewById(R.id.olives_checkbox);
        Boolean olives = olive.isChecked();
        CheckBox large = (CheckBox) findViewById(R.id.pizza1);
        Boolean largePizza = large.isChecked();
        CheckBox Regular = (CheckBox) findViewById(R.id.olives_checkbox);
        Boolean regPizza = olive.isChecked();
        int price = calculatePrice(che,olives,regPizza,largePizza);
        String finalMessage =createFinalMessage (names,regPizza,largePizza,che,olives,price);

        Intent i = new Intent(Intent.ACTION_SEND);
        i.setType("text/plain");
        i.putExtra(Intent.EXTRA_EMAIL  , new String[]{"nehanavgale204@gmail.com"});
        i.putExtra(Intent.EXTRA_SUBJECT, "Your Pizza Order");
        i.putExtra(Intent.EXTRA_TEXT   , finalMessage);
        try {
            startActivity(Intent.createChooser(i, "Send mail..."));
        } catch (android.content.ActivityNotFoundException ex) {
            Toast.makeText(MainActivity.this, "There are no email clients installed.", Toast.LENGTH_SHORT).show();
        }

    }

}
