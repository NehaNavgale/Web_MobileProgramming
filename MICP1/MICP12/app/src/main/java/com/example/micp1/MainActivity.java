package com.example.micp1;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    Button login;
    EditText uid,pwd;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        login = (Button)findViewById(R.id.loginBtn);
        uid = (EditText)findViewById(R.id.txtUserName);
        pwd = (EditText)findViewById(R.id.txtPassword);

        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(uid.getText().toString().equals("neha") &&
                        pwd.getText().toString().equals("neha")) {
                    Toast.makeText(getApplicationContext(),
                            "Logged In",Toast.LENGTH_SHORT).show();
                    reDirectToHomePage();
                }else{
                    Toast.makeText(getApplicationContext(), "You entered wrong credentials. Please try again",Toast.LENGTH_SHORT).show();

                }
            }


        });
    }

    public void reDirectToHomePage() {
        Intent redirect = new Intent(MainActivity.this, homeActivity.class);
        startActivity(redirect);
    }

}
