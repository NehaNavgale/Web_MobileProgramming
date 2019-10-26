package com.example.pizzaOrder;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;

import com.example.pizzaOrder.MainActivity;

public class SummaryActivity extends AppCompatActivity {

    TextView tvView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_summary );
        tvView = (TextView) findViewById(R.id.resultTxt);

        Intent intent = getIntent();

        String message = intent.getStringExtra("mes");
        tvView.setText("Your order summary is: " + message);
    }



    public void reuse(View view)
    {
        Intent redirect = new Intent(SummaryActivity.this,MainActivity.class);
        startActivity(redirect);
    }
}
