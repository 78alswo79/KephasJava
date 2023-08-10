package org.minjaeacademy.practice;

public class Circle {
	private double radius;
	private String color;
	
	public Circle() {
		this.radius = 1.0;
		this.color = "blue";
	}
//
	public Circle(double r) {
		this.radius = r;
		this.color = "soHotPink";
	}
	
	public Circle(double radius, String color) {
		this.radius = radius;
		this.color = "soHotPink";
	}
	
	public double getRedius() {
		return this.radius;
	}
	
	public void setRadius (double newRadius) {
		this.radius = newRadius;
	}
	
	public String getColor() {
		return this.color;
	}
	
	public void setColor(String newColor) {
		this.color = newColor;
	}
	
	public double getArea() {
		return radius*radius*Math.PI;
	}
	
	public String toString() {
		return "Circle[radius " +this.radius+" color = "+this.color+"]";
	}
	
}
